/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 40200
 Source Host           : localhost:27017
 Source Schema         : Ad_DB

 Target Server Type    : MongoDB
 Target Server Version : 40200
 File Encoding         : 65001

 Date: 28/06/2021 13:52:47
*/


// ----------------------------
// Collection structure for ads
// ----------------------------
db.getCollection("ads").drop();
db.createCollection("ads");

// ----------------------------
// Documents of ads
// ----------------------------
db.getCollection("ads").insert([ {
    _id: ObjectId("60d6b5c791de3d44a4a3470f"),
    images: [
        "/ads/undefined",
        "/ads/undefined"
    ],
    specs: [
        "60d5a264af7bc30c48b0789a",
        "60d5a28caf7bc30c48b078c3",
        "60d551aaaf7bc30c48b077dd",
        "60d55103af7bc30c48b077a3",
        "60d5855daf7bc30c48b0783b",
        "60d58560af7bc30c48b0783f",
        "60d530d4c8632d22ac995ecb",
        "#964b00"
    ],
    title: "asd",
    description: "asd",
    category: ObjectId("60d4430f8550bc560460058c"),
    "sub_category": ObjectId("60d443788550bc56046005a1"),
    "contact_name": "asd",
    "contact_email": "asd@dd.com",
    date: ISODate("2021-06-26T05:06:15.905Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("ads").insert([ {
    _id: ObjectId("60d6b610d84c3b527ca9363a"),
    images: [
        "/ads/undefined",
        "/ads/undefined"
    ],
    specs: [
        "60d5a264af7bc30c48b0789a",
        "60d5a28caf7bc30c48b078c3",
        "60d551aaaf7bc30c48b077dd",
        "60d55103af7bc30c48b077a3",
        "60d5855daf7bc30c48b0783b",
        "60d58560af7bc30c48b0783f",
        "60d530d4c8632d22ac995ecb",
        "#964b00"
    ],
    title: "asd",
    description: "asd",
    category: ObjectId("60d4430f8550bc560460058c"),
    "sub_category": ObjectId("60d443788550bc56046005a1"),
    "contact_name": "asd",
    "contact_email": "asd@dd.com",
    date: ISODate("2021-06-26T05:07:28.426Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("ads").insert([ {
    _id: ObjectId("60d6b62aa04a903b04862e5c"),
    images: [
        "/ads/6534d8ae-066f-41d8-a8cb-3d2dc4b4ba3e-programming-code-abstract-technology-background-software-deve-developer-computer-script-83856240.jpg",
        "/ads/f27c58f2-4bf9-4c0a-8245-3af2dc5b2d94-famous-software-engineers.jpg"
    ],
    specs: [
        "60d5a264af7bc30c48b0789a",
        "60d5a28caf7bc30c48b078c3",
        "60d551aaaf7bc30c48b077dd",
        "60d55103af7bc30c48b077a3",
        "60d5855daf7bc30c48b0783b",
        "60d58560af7bc30c48b0783f",
        "60d530d4c8632d22ac995ecb",
        "#964b00"
    ],
    title: "asd",
    description: "asd",
    category: ObjectId("60d4430f8550bc560460058c"),
    "sub_category": ObjectId("60d443788550bc56046005a1"),
    "contact_name": "asd",
    "contact_email": "asd@dd.com",
    date: ISODate("2021-06-26T05:07:54.937Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("ads").insert([ {
    _id: ObjectId("60d7fb5fa04a903b04862ef5"),
    images: [
        "/ads/8233e438-cdb2-40d9-b085-dd131b87927f-1920-550-back.png",
        "/ads/09ce0576-f8a8-4dfd-8db9-da81ea245006-programming-code-abstract-technology-background-software-deve-developer-computer-script-83856240.jpg"
    ],
    specs: [
        "60d5a276af7bc30c48b078b0",
        "60d5a290af7bc30c48b078c8",
        "60d551a3af7bc30c48b077d5",
        "60d550fdaf7bc30c48b0779e",
        "60d58558af7bc30c48b07837",
        "60d5855daf7bc30c48b0783b",
        "60d58560af7bc30c48b0783f",
        "60d530d4c8632d22ac995ecb",
        "#fff",
        "",
        "60d7faeda04a903b04862ee5"
    ],
    title: "New Testing Ad",
    description: "Hello, everybody, \ncheck this and ping me.",
    category: ObjectId("60d4430f8550bc560460058c"),
    "sub_category": ObjectId("60d443788550bc56046005a1"),
    "contact_name": "Jackey",
    "contact_email": "jackey@gmail.com",
    date: ISODate("2021-06-27T04:15:27.953Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for categories
// ----------------------------
db.getCollection("categories").drop();
db.createCollection("categories");

// ----------------------------
// Documents of categories
// ----------------------------
db.getCollection("categories").insert([ {
    _id: ObjectId("60d4430f8550bc560460058c"),
    name: "Cars and Bikes 123",
    date: ISODate("2021-06-24T08:32:15.021Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("60d4432a8550bc560460058e"),
    name: "Video Games and Consoles",
    date: ISODate("2021-06-24T08:32:42.483Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("60d443468550bc5604600594"),
    name: "Books Sports Stationary",
    date: ISODate("2021-06-24T08:33:10.263Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("60d4434f8550bc5604600596"),
    name: "Business Equipmentssdf",
    date: ISODate("2021-06-24T08:33:19.053Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("60d443588550bc5604600598"),
    name: "Electronics Appliances",
    date: ISODate("2021-06-24T08:33:28.809Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("60d443638550bc560460059a"),
    name: "Women's Fashion",
    date: ISODate("2021-06-24T08:33:39.413Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("60d4436c8550bc560460059c"),
    name: "Real Estate for Rent",
    date: ISODate("2021-06-24T08:33:48.921Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("60d493778550bc5604600893"),
    name: "Category end",
    date: ISODate("2021-06-24T14:15:19.355Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for fields
// ----------------------------
db.getCollection("fields").drop();
db.createCollection("fields");

// ----------------------------
// Documents of fields
// ----------------------------
db.getCollection("fields").insert([ {
    _id: ObjectId("60d407a1b66e9c55445dd505"),
    name: "Car Make",
    type: "Select",
    date: ISODate("2021-06-24T04:18:41.151Z"),
    __v: NumberInt("7"),
    specs: [
        ObjectId("60d5a264af7bc30c48b0789a"),
        ObjectId("60d5a268af7bc30c48b0789f"),
        ObjectId("60d5a26aaf7bc30c48b078a3"),
        ObjectId("60d5a270af7bc30c48b078a8"),
        ObjectId("60d5a273af7bc30c48b078ac"),
        ObjectId("60d5a276af7bc30c48b078b0"),
        ObjectId("60d5a279af7bc30c48b078b4")
    ]
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d408d0b66e9c55445dd509"),
    name: "Model",
    type: "Select",
    date: ISODate("2021-06-24T04:23:44.677Z"),
    __v: NumberInt("3"),
    specs: [
        ObjectId("60d5a28caf7bc30c48b078c3"),
        ObjectId("60d5a290af7bc30c48b078c8"),
        ObjectId("60d5a293af7bc30c48b078cc")
    ]
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d409bdb66e9c55445dd514"),
    name: "Year",
    type: "Select",
    date: ISODate("2021-06-24T04:27:41.903Z"),
    __v: NumberInt("6"),
    specs: [
        ObjectId("60d5519eaf7bc30c48b077d0"),
        ObjectId("60d551a3af7bc30c48b077d5"),
        ObjectId("60d551a7af7bc30c48b077d9"),
        ObjectId("60d551aaaf7bc30c48b077dd"),
        ObjectId("60d551adaf7bc30c48b077e1"),
        ObjectId("60d551b0af7bc30c48b077e5")
    ]
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d439fd3414b363dc633e72"),
    name: "Condition",
    type: "Radio",
    date: ISODate("2021-06-24T07:53:33.745Z"),
    __v: NumberInt("3"),
    specs: [
        ObjectId("60d550fdaf7bc30c48b0779e"),
        ObjectId("60d55103af7bc30c48b077a3"),
        ObjectId("60d5513faf7bc30c48b077b2")
    ]
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d4441b8550bc56046005cc"),
    name: "Kilometers",
    type: "Select",
    date: ISODate("2021-06-24T08:36:43.764Z"),
    __v: NumberInt("2"),
    specs: [
        ObjectId("60d7faeda04a903b04862ee5"),
        ObjectId("60d7faf5a04a903b04862eea")
    ]
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d444378550bc56046005ce"),
    name: "Transmission",
    type: "Radio",
    date: ISODate("2021-06-24T08:37:11.389Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d444408550bc56046005d0"),
    name: "Fuel",
    type: "Radio",
    date: ISODate("2021-06-24T08:37:20.46Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d4444a8550bc56046005d2"),
    name: "Car Options",
    type: "Multi Select",
    date: ISODate("2021-06-24T08:37:30.325Z"),
    __v: NumberInt("7"),
    specs: [
        ObjectId("60d5854eaf7bc30c48b0782a"),
        ObjectId("60d58551af7bc30c48b0782f"),
        ObjectId("60d58555af7bc30c48b07833"),
        ObjectId("60d58558af7bc30c48b07837"),
        ObjectId("60d5855daf7bc30c48b0783b"),
        ObjectId("60d58560af7bc30c48b0783f"),
        ObjectId("60d58565af7bc30c48b07843")
    ]
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d449568550bc5604600712"),
    name: "Test Field",
    type: "Multi Select",
    date: ISODate("2021-06-24T08:59:02.071Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d449ec8550bc5604600762"),
    name: "Type",
    type: "Select",
    date: ISODate("2021-06-24T09:01:32.758Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d492568550bc5604600805"),
    name: "New Field",
    type: "Select",
    date: ISODate("2021-06-24T14:10:30.895Z"),
    __v: NumberInt("2"),
    specs: [
        ObjectId("60d530d4c8632d22ac995ecb"),
        ObjectId("60d530e7c8632d22ac995ed0")
    ]
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d58a3caf7bc30c48b07851"),
    specs: [ ],
    name: "Color",
    type: "Color Select",
    date: ISODate("2021-06-25T07:48:12.921Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fields").insert([ {
    _id: ObjectId("60d5a80aaf7bc30c48b07905"),
    specs: [ ],
    name: "Price",
    type: "Price",
    date: ISODate("2021-06-25T09:55:22.605Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for fieldspecs
// ----------------------------
db.getCollection("fieldspecs").drop();
db.createCollection("fieldspecs");

// ----------------------------
// Documents of fieldspecs
// ----------------------------
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d445288550bc5604600624"),
    name: "Automatic",
    field: ObjectId("60d444378550bc56046005ce"),
    date: ISODate("2021-06-24T08:41:12.981Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d4452d8550bc5604600627"),
    name: "Manual",
    field: ObjectId("60d444378550bc56046005ce"),
    date: ISODate("2021-06-24T08:41:17.928Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d4453d8550bc560460062c"),
    name: "Gasoline",
    field: ObjectId("60d444408550bc56046005d0"),
    date: ISODate("2021-06-24T08:41:33.949Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d445428550bc560460062f"),
    name: "Diesel",
    field: ObjectId("60d444408550bc56046005d0"),
    date: ISODate("2021-06-24T08:41:38.38Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d445478550bc5604600632"),
    name: "Hybrid",
    field: ObjectId("60d444408550bc56046005d0"),
    date: ISODate("2021-06-24T08:41:43.868Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d4454c8550bc5604600635"),
    name: "Electric",
    field: ObjectId("60d444408550bc56046005d0"),
    date: ISODate("2021-06-24T08:41:48.796Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d445578550bc5604600638"),
    name: "Plug-in - Hybrid",
    field: ObjectId("60d444408550bc56046005d0"),
    date: ISODate("2021-06-24T08:41:59.372Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d4495e8550bc5604600717"),
    name: "Value 1",
    field: ObjectId("60d449568550bc5604600712"),
    date: ISODate("2021-06-24T08:59:10.707Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d449648550bc560460071a"),
    name: "Value 2",
    field: ObjectId("60d449568550bc5604600712"),
    date: ISODate("2021-06-24T08:59:16.276Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d530d4c8632d22ac995ecb"),
    name: "Value 1",
    field: ObjectId("60d492568550bc5604600805"),
    date: ISODate("2021-06-25T01:26:44.835Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d530e7c8632d22ac995ed0"),
    name: "Value 2",
    field: ObjectId("60d492568550bc5604600805"),
    date: ISODate("2021-06-25T01:27:03.05Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d550fdaf7bc30c48b0779e"),
    name: "New",
    field: ObjectId("60d439fd3414b363dc633e72"),
    date: ISODate("2021-06-25T03:43:57.194Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d55103af7bc30c48b077a3"),
    name: "Old",
    field: ObjectId("60d439fd3414b363dc633e72"),
    date: ISODate("2021-06-25T03:44:03.000Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5513faf7bc30c48b077b2"),
    name: "rent",
    field: ObjectId("60d439fd3414b363dc633e72"),
    date: ISODate("2021-06-25T03:45:03.841Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5519eaf7bc30c48b077d0"),
    name: "2021",
    field: ObjectId("60d409bdb66e9c55445dd514"),
    date: ISODate("2021-06-25T03:46:38.488Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d551a3af7bc30c48b077d5"),
    name: "2020",
    field: ObjectId("60d409bdb66e9c55445dd514"),
    date: ISODate("2021-06-25T03:46:43.862Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d551a7af7bc30c48b077d9"),
    name: "2019",
    field: ObjectId("60d409bdb66e9c55445dd514"),
    date: ISODate("2021-06-25T03:46:47.544Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d551aaaf7bc30c48b077dd"),
    name: "2018",
    field: ObjectId("60d409bdb66e9c55445dd514"),
    date: ISODate("2021-06-25T03:46:50.124Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d551adaf7bc30c48b077e1"),
    name: "2017",
    field: ObjectId("60d409bdb66e9c55445dd514"),
    date: ISODate("2021-06-25T03:46:53.664Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d551b0af7bc30c48b077e5"),
    name: "2016",
    field: ObjectId("60d409bdb66e9c55445dd514"),
    date: ISODate("2021-06-25T03:46:56.744Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5854eaf7bc30c48b0782a"),
    name: "Sunroof\t",
    field: ObjectId("60d4444a8550bc56046005d2"),
    date: ISODate("2021-06-25T07:27:10.204Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d58551af7bc30c48b0782f"),
    name: "Electric Mirrors\t",
    field: ObjectId("60d4444a8550bc56046005d2"),
    date: ISODate("2021-06-25T07:27:13.641Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d58555af7bc30c48b07833"),
    name: "Touch Screen\t",
    field: ObjectId("60d4444a8550bc56046005d2"),
    date: ISODate("2021-06-25T07:27:17.997Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d58558af7bc30c48b07837"),
    name: "Navigation System\t",
    field: ObjectId("60d4444a8550bc56046005d2"),
    date: ISODate("2021-06-25T07:27:20.984Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5855daf7bc30c48b0783b"),
    name: "Cruise Control\t",
    field: ObjectId("60d4444a8550bc56046005d2"),
    date: ISODate("2021-06-25T07:27:25.446Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d58560af7bc30c48b0783f"),
    name: "Keyless entry\t",
    field: ObjectId("60d4444a8550bc56046005d2"),
    date: ISODate("2021-06-25T07:27:28.849Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d58565af7bc30c48b07843"),
    name: "Air Condition\t",
    field: ObjectId("60d4444a8550bc56046005d2"),
    date: ISODate("2021-06-25T07:27:33.808Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a264af7bc30c48b0789a"),
    name: "Opel",
    field: ObjectId("60d407a1b66e9c55445dd505"),
    date: ISODate("2021-06-25T09:31:16.799Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a268af7bc30c48b0789f"),
    name: "Audi",
    field: ObjectId("60d407a1b66e9c55445dd505"),
    date: ISODate("2021-06-25T09:31:20.075Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a26aaf7bc30c48b078a3"),
    name: "Infiniti",
    field: ObjectId("60d407a1b66e9c55445dd505"),
    date: ISODate("2021-06-25T09:31:22.67Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a270af7bc30c48b078a8"),
    name: "Aston Martin\t",
    field: ObjectId("60d407a1b66e9c55445dd505"),
    date: ISODate("2021-06-25T09:31:28.463Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a273af7bc30c48b078ac"),
    name: "Acura",
    field: ObjectId("60d407a1b66e9c55445dd505"),
    date: ISODate("2021-06-25T09:31:31.452Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a276af7bc30c48b078b0"),
    name: "Alfa Romeo\t",
    field: ObjectId("60d407a1b66e9c55445dd505"),
    date: ISODate("2021-06-25T09:31:34.152Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a279af7bc30c48b078b4"),
    name: "MG",
    field: ObjectId("60d407a1b66e9c55445dd505"),
    date: ISODate("2021-06-25T09:31:37.621Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a28caf7bc30c48b078c3"),
    name: "Model 1",
    field: ObjectId("60d408d0b66e9c55445dd509"),
    date: ISODate("2021-06-25T09:31:56.933Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a290af7bc30c48b078c8"),
    name: "model 2",
    field: ObjectId("60d408d0b66e9c55445dd509"),
    date: ISODate("2021-06-25T09:32:00.156Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d5a293af7bc30c48b078cc"),
    name: "Model 3",
    field: ObjectId("60d408d0b66e9c55445dd509"),
    date: ISODate("2021-06-25T09:32:03.92Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d7faeda04a903b04862ee5"),
    name: "1 - 1000",
    field: ObjectId("60d4441b8550bc56046005cc"),
    date: ISODate("2021-06-27T04:13:33.884Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("fieldspecs").insert([ {
    _id: ObjectId("60d7faf5a04a903b04862eea"),
    name: "1000 - 10000",
    field: ObjectId("60d4441b8550bc56046005cc"),
    date: ISODate("2021-06-27T04:13:41.438Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for subcategories
// ----------------------------
db.getCollection("subcategories").drop();
db.createCollection("subcategories");

// ----------------------------
// Documents of subcategories
// ----------------------------
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d443788550bc56046005a1"),
    fields: [
        ObjectId("60d407a1b66e9c55445dd505"),
        ObjectId("60d408d0b66e9c55445dd509"),
        ObjectId("60d409bdb66e9c55445dd514"),
        ObjectId("60d439fd3414b363dc633e72"),
        ObjectId("60d4444a8550bc56046005d2"),
        ObjectId("60d492568550bc5604600805"),
        ObjectId("60d58a3caf7bc30c48b07851"),
        ObjectId("60d444408550bc56046005d0"),
        ObjectId("60d4441b8550bc56046005cc")
    ],
    name: "Cars For Sale",
    category: ObjectId("60d4430f8550bc560460058c"),
    date: ISODate("2021-06-24T08:34:00.545Z"),
    __v: NumberInt("12")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d443808550bc56046005a4"),
    fields: [
        ObjectId("60d407a1b66e9c55445dd505"),
        ObjectId("60d408d0b66e9c55445dd509")
    ],
    name: "Cars on installament",
    category: ObjectId("60d4430f8550bc560460058c"),
    date: ISODate("2021-06-24T08:34:08.924Z"),
    __v: NumberInt("2")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d443898550bc56046005a7"),
    fields: [ ],
    name: "Carfax Report",
    category: ObjectId("60d4430f8550bc560460058c"),
    date: ISODate("2021-06-24T08:34:17.198Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d443908550bc56046005aa"),
    fields: [ ],
    name: "Motorcycle",
    category: ObjectId("60d4430f8550bc560460058c"),
    date: ISODate("2021-06-24T08:34:24.493Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d4439f8550bc56046005ad"),
    fields: [ ],
    name: "Care Plates Number",
    category: ObjectId("60d4430f8550bc560460058c"),
    date: ISODate("2021-06-24T08:34:39.396Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d445ea8550bc560460068e"),
    fields: [
        ObjectId("60d449ec8550bc5604600762")
    ],
    name: "Consoles",
    category: ObjectId("60d4432a8550bc560460058e"),
    date: ISODate("2021-06-24T08:44:26.572Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d445ef8550bc5604600691"),
    fields: [ ],
    name: "video Games",
    category: ObjectId("60d4432a8550bc560460058e"),
    date: ISODate("2021-06-24T08:44:31.518Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d445fc8550bc5604600694"),
    fields: [ ],
    name: "Accessories - Replacement Parts",
    category: ObjectId("60d4432a8550bc560460058e"),
    date: ISODate("2021-06-24T08:44:44.567Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d446038550bc5604600697"),
    fields: [ ],
    name: "Gaming Cards",
    category: ObjectId("60d4432a8550bc560460058e"),
    date: ISODate("2021-06-24T08:44:51.144Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d446108550bc560460069a"),
    fields: [ ],
    name: "Accounts and Characters",
    category: ObjectId("60d4432a8550bc560460058e"),
    date: ISODate("2021-06-24T08:45:04.08Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d447508550bc560460069d"),
    fields: [ ],
    name: "Other Gaming",
    category: ObjectId("60d4432a8550bc560460058e"),
    date: ISODate("2021-06-24T08:50:24.366Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d447a68550bc56046006a4"),
    fields: [ ],
    name: "Tickets",
    category: ObjectId("60d443468550bc5604600594"),
    date: ISODate("2021-06-24T08:51:50.016Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d447ac8550bc56046006a7"),
    fields: [ ],
    name: "Musical Instruments",
    category: ObjectId("60d443468550bc5604600594"),
    date: ISODate("2021-06-24T08:51:56.942Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d447b38550bc56046006aa"),
    fields: [ ],
    name: "Collectibles",
    category: ObjectId("60d443468550bc5604600594"),
    date: ISODate("2021-06-24T08:52:03.09Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d447b98550bc56046006ad"),
    fields: [ ],
    name: "Books Magazines",
    category: ObjectId("60d443468550bc5604600594"),
    date: ISODate("2021-06-24T08:52:09.413Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d447c18550bc56046006b0"),
    fields: [
        ObjectId("60d492568550bc5604600805")
    ],
    name: "Sports Leisure",
    category: ObjectId("60d443468550bc5604600594"),
    date: ISODate("2021-06-24T08:52:17.746Z"),
    __v: NumberInt("1")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d447cf8550bc56046006b5"),
    fields: [ ],
    name: "Professiona Equipment",
    category: ObjectId("60d4434f8550bc5604600596"),
    date: ISODate("2021-06-24T08:52:31.391Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d4492a8550bc5604600706"),
    fields: [ ],
    name: "Funny Ad 1",
    category: ObjectId("60d449148550bc56046006f8"),
    date: ISODate("2021-06-24T08:58:18.779Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d449858550bc5604600733"),
    fields: [ ],
    name: "Apartments for Sale",
    category: ObjectId("60d4436c8550bc560460059c"),
    date: ISODate("2021-06-24T08:59:49.242Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d4498d8550bc5604600736"),
    fields: [
        ObjectId("60d4441b8550bc56046005cc"),
        ObjectId("60d439fd3414b363dc633e72")
    ],
    name: "Villa - Place for Sale",
    category: ObjectId("60d4436c8550bc560460059c"),
    date: ISODate("2021-06-24T08:59:57.794Z"),
    __v: NumberInt("2")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d4939a8550bc560460089f"),
    fields: [
        ObjectId("60d407a1b66e9c55445dd505"),
        ObjectId("60d439fd3414b363dc633e72"),
        ObjectId("60d492568550bc5604600805")
    ],
    name: "Suy Category",
    category: ObjectId("60d443638550bc560460059a"),
    date: ISODate("2021-06-24T14:15:54.947Z"),
    __v: NumberInt("3")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d526dc5d8bfa1564df222e"),
    fields: [ ],
    name: "hjhjh",
    category: ObjectId("60d4430f8550bc560460058c"),
    date: ISODate("2021-06-25T00:44:12.327Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("subcategories").insert([ {
    _id: ObjectId("60d527005d8bfa1564df2238"),
    fields: [ ],
    name: "asdasdasd",
    category: ObjectId("60d493778550bc5604600893"),
    date: ISODate("2021-06-25T00:44:48.966Z"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("60d1a23c4412af50f4c1bc46"),
    name: "admin",
    email: "admin@admin.com",
    avatar: "",
    password: "$2a$10$4nsl0eqkNwKA1FqPwUAMXe8fvdoWbL4khCKwryBb9cUInel5WMEtC",
    gender: "male",
    role: "admin",
    date: ISODate("2021-06-22T08:41:32.951Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60d1a28c4412af50f4c1bc4b"),
    name: "client",
    email: "client@client.com",
    avatar: "/avatars/f7bc5c8d-dcc1-46fd-9978-f2c9c1960dbf-famous-software-engineers.jpg",
    password: "$2a$10$ZDOw2DsSQSl2gJfyGZbdO.2Gktm2SmxPZI5hEf72teKtY06vaAY46",
    gender: "male",
    role: "",
    date: ISODate("2021-06-22T08:42:52.352Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60d1eb764412af50f4c1bc50"),
    name: "test",
    email: "t1@test.com",
    avatar: "/avatars/ad84cc0f-c613-4519-b5ed-838b6cc8beb2-programming-code-abstract-technology-background-software-deve-developer-computer-script-83856240.jpg",
    password: "$2a$10$ggR1v1/rWrqUmPcGRcVCtua9hV2wm7kaDmatfP97xllZxvKQ/Y0T.",
    gender: "male",
    role: "",
    date: ISODate("2021-06-22T13:53:58.536Z"),
    __v: NumberInt("0")
} ]);
