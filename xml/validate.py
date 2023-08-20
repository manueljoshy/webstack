import xmlschema
xml_file = "employee.xml"
xsd_file = "employee_schema.xsd"

validator = xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("XML file is valid against the XSD schema.")
else:
    print("XML file is not valid against the XSD schema.")
    print(validator(xml_file))