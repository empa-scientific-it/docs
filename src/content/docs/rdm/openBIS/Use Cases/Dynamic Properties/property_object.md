---
title: Get value of a property in an object
---

## Background
You have created an `OBJECT` in openBIS (e.g called **CHEMICAL**) and you would like to create a new `OBJECT` (e.g. called **CHEMICAL_MOL**) which contains automatically values of a `Property` (e.g. called **MOLECULAR_WEIGHT**) from the `OBJECT` **CHEMICAL**. 
To do this, you can use the property type `OBJECT` during the creation of an Object type. This property type `OBJECT` can be assigned to one or more [properties](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/admins-documentation/new-entity-type-registration.html). Using this property type, users can create a fixed 1:1 link between two objects, similar to parent-children relationships but limited to a single entity. 

View the picture below for instructions and get the whole script of the dynamic property plugin in the [section](#using-object-properties-in-dynamic-properties-plugin-sripts) below:

![Picture](src/assets/openBIS/Bild/Property_type_Object.png)


## Using OBJECT properties in dynamic properties plugin sripts

Unfortunately, when using the dynamic properties [plugin](https://openbis.readthedocs.io/en/latest/user-documentation/general-admin-users/properties-handled-by-scripts.html#dynamic-properties), the standard method `getPropertyValue` (see [here](https://openbis.ch/javadoc/20.10.x/javadoc-dynamic-api/ch/systemsx/cisd/openbis/generic/shared/hotdeploy_plugins/api/IEntityPropertyAdaptor.html)) called on a property of type `OBJECT` returns `null` instead of the property value as it should. 

If you still want to access it value, you need to use a workaround. The idea behind this is explained below.

Because the dynamic property scripts are written in [jython](https://www.jython.org/) we can import the openBIS V3 Java API and use other methods to retrieve the linked object. Once we have this, we can access its contents using the methods of the [V3 API](https://openbis.ch/javadoc/20.10.x/javadoc-api-v3/index.html).

Below is the script which is used in the example of the picture above:

```python
from ch.ethz.sis.openbis.generic.asapi.v3.dto.sample.update import SampleUpdate;
from ch.ethz.sis.openbis.generic.asapi.v3.dto.sample.id import SamplePermId;
from ch.systemsx.cisd.openbis.generic.server import CommonServiceProvider;
from ch.ethz.sis.openbis.generic import OpenBIS;
from ch.ethz.sis.openbis.generic.asapi.v3.dto.sample.fetchoptions import SampleFetchOptions;
from ch.ethz.sis.openbis.generic.asapi.v3.dto.sample.id import SamplePermId

def getLinkedObject(entity, name):
    """
    This function takes an entity (available in `calculate`) and a property 
    name (`name`) that corresponds to an an object property with the OBJECT type and returns a V3 API Sample object corresponding to the object
    the property refers to or None if the sample or the property cannot be found
    """
    #Get the V3 api and connect as system user
    session_token = CommonServiceProvider.getApplicationServerApi().loginAsSystem();
    v3api = OpenBIS("http://localhost:8080");
    v3api.setSessionToken(session_token);
    #Configure the fetch options used to retreive the sample from the V3 API
    sfo = SampleFetchOptions()
    #This means that we retreive properties but also children and the parents of the object the property links to
    sfo.withProperties()
    sfo.withChildren()
    sfo.withParents()
    # Get the string value of the TESTOBJECT property using the "normal" dynamic property API
    pe = entity.property(name)
    if pe:
        permid = pe.getPropertyPE().tryGetUntypedValue()
        #Create a SamplePermID object, this is needed by the getSamples method of the V3 API
        ipermid = SamplePermId(permid)
        result = v3api.getSamples([ipermid], sfo)
        return result.get(ipermid)

def calculate():
   #Be careful here: if the property with the chosen name does not exist, sample is None
    sample = getLinkedObject(entity, "CHEMICAL_CONNECT")
    if sample:
    #Get the properties of the sample. 
    # Be careful, the "sample" object is a V3 API object (https://openbis.ch/javadoc/20.10.x/javadoc-api-v3/ch/ethz/sis/openbis/generic/asapi/v3/dto/sample/Sample.html)
    # while the entity object (which is available in calculate) implements IEntityPropertyAdapter (https://openbis.ch/javadoc/20.10.x/javadoc-dynamic-api/ch/systemsx/cisd/openbis/generic/shared/hotdeploy_plugins/api/IEntityPropertyAdaptor.html)
    # The properties are a Java Map, they can be accessed like a dictionary using []
        return sample.properties["MOLECULAR_WEIGHT"]
    # Don't forget to always add error handling, in this case it is:
    else:
        return 0
```


