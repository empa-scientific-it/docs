---
title: Read/write programmatically into spreadsheet
---

## Introduction

OpenBIS offers the data type `XML` (more info [here](https://unlimited.ethz.ch/display/openBISDoc2010/XML+Properties)) which enables users to store structured data such as tables or other complex documents in object properties.
While these properties can store any valid XML document, their most documented use are [*spreadsheets*](https://openbis.readthedocs.io/en/latest/user-documentation/general-users/additional-functionalities.html#spreadsheet) in the ELN-LIMS interface.

The spreadsheet is an  additional UI component that must be enabled by the instance admin for a specific object type, as explained [here](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/admins-documentation/new-entity-type-registration.html#enable-rich-text-editor-or-spreadsheet-widgets). Once enabled, they allow editing and displaying the content of the property as an spreadsheet supporting calculation with formulas similar to an excel spread sheet.

## Integration with python scripts

Sometimes, you would like to read/write the contents of a spreadsheet from a python script; either using a jython plugin from the admin UI or with an external script using pybis.


### With dynamic properties

The following snippet can be used to work with spreadsheets inside of dynamic property plugins:

```python
import base64
import re
import collections
import json


def json_load_byteified(file_handle):
    return _byteify(
        json.load(file_handle, object_hook=_byteify),
        ignore_dicts=True
    )

def json_loads_byteified(json_text):
    return _byteify(
        json.loads(json_text, object_hook=_byteify),
        ignore_dicts=True
    )

def _byteify(data, ignore_dicts = False):
    if isinstance(data, str):
        return data

    # If this is a list of values, return list of byteified values
    if isinstance(data, list):
        return [ _byteify(item, ignore_dicts=True) for item in data ]
    # If this is a dictionary, return dictionary of byteified keys and values
    # but only if we haven't already byteified it
    if isinstance(data, dict) and not ignore_dicts:
        return {
            _byteify(key, ignore_dicts=True): _byteify(value, ignore_dicts=True)
            for key, value in data.items() # changed to .items() for Python 2.7/3
        }

    # Python 3 compatible duck-typing
    # If this is a Unicode string, return its string representation
    if str(type(data)) == "<type 'unicode'>":
        return str(data.encode('utf-8'))

    # If it's anything else, return it in its original form
    return data
    
class Spreadsheet:
    def __init__(self, data):
        self.data = to_dict(data)
    
    def get_pos(self, key):
        if len(key) != 2:
            raise ValueError("Key should be at most two elements long")
        else:
            x = self.data['headers'].index(key[0]) 
            y = int(key[1]) - 1
        return y, x

    
    def __getitem__(self, key):
        x, y = self.get_pos(key)
        return self.data['data'][x][y]
        
    def __setitem__(self, key, value):
        x, y = self.get_pos(key)
        self.data['data'][x][y] = value

def extract(xml):
    """
    Extract only the "DATA" Portion 
    """
    pattern = "<DATA>(.*)<\/DATA>"
    res = re.search(pattern, xml)
    value = res.groups(0)
    return value[0]
    
def decode_b64(uu_data):
    """
    Return the spreadsheet as JSON string
    """
    return base64.b64decode(uu_data)

def to_dict(prop):
    data = json_loads_byteified(decode_b64(extract(prop)))
    return data
    
def from_dict(data):
    encoded = base64.b64encode((json.dumps(data)))
    return "<DATA>{0}</DATA>".format(encoded)
    
def calculate():
    prop = entity.propertyValue('DATA')
    sp = Spreadsheet(prop)
    sp["B3"]= sp["B2"] * 2 + sp["A2"]
    return from_dict(sp.data)
```

This example is written as a jython dynamic property plugin and can be tested on an openBIS object with a `DATA` property of type `XML`.
As you can see in the `calculate` function, you can now reference spreadsheet cells like python dictionary and use these for computations.

!!! note
    Note that the code above was written with jython 2.7 in mind, several functions above would not be needed in python3 because all strings are encoded as unicode there. If using python 3, you can remove calls to `json_loads_byteified`.


### With python3

If you want to use the spreadsheet property in a python3 script, you can base on this snippet:

```python

class Spreadsheet:
    data: dict[str, str]
    def __init__(self, data):
        self.data = to_dict(data)

    
    def valid_data(self):
        """
        Get only the non empty rows
        """
        return [row for row in self.data["data"] if len(row) > 0]

    def __str__(self):
        """
        Format data as table in functional style
        """
        return "\n".join(
            [
                "\t".join(self.data["headers"]),
                *["\t".join(row) for row in self.data["data"]]
            ]
        )



    def get_pos(self, key):
        if len(key) != 2:
            raise ValueError("Key should be at most two elements long")
        else:
            x = self.data["headers"].index(key[0])
            y = int(key[1]) - 1
        return y, x

    def __getitem__(self, key):
        x, y = self.get_pos(key)
        return self.data["data"][x][y]

    def __setitem__(self, key, value):
        x, y = self.get_pos(key)
        self.data["data"][x][y] = value


def extract(xml: str) -> str:
    """
    Extract only the "DATA" Portion
    """
    pattern = "<DATA>(.*)<\/DATA>"
    res = re.search(pattern, xml)
    value = res.groups(0)
    return value[0]


def decode_b64(uu_data: bytes) -> str:
    """
    Return the spreadsheet as JSON string
    """
    return b64.b64decode(uu_data)


def to_dict(prop: str) -> dict[str, str]: 
    data = json.loads(decode_b64(extract(prop)))
    return data


def to_spreadsheet(prop: str) -> Spreadsheet: 
    return Spreadsheet(to_dict(prop))

```

to produce a spreadsheet object, you nee to call `to_spreadsheet` with the property value you want to parse.