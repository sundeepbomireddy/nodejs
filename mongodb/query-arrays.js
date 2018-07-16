//Query an Array
db.inventory.insertMany([
   { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
   { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
   { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
   { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
   { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
]);

//The following example queries for all documents where the field tags value is an array with exactly two elements, "red" and "blank", in the specified order:
db.inventory.find( { tags: ["red", "blank"] } );

//If, instead, you wish to find an array that contains both the elements "red" and "blank", without regard to order or other elements in the array, use the $all operator:
db.inventory.find( { tags: { $all: ["red", "blank"] } } );


//Query an Array for an Element

// The following example queries for all documents where tags is an array that contains the string "red" as one of its elements:
db.inventory.find( { tags: "red" } )

//Query an Array with Compound Filter Conditions on the Array Elements
//The following example queries for documents where the dim_cm array contains elements that in some combination satisfy the query conditions; e.g., one element can satisfy the greater than 15 condition and another element can satisfy the less than 20 condition, or a single element can satisfy both:
db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } )

//Query for an Element by the Array Index Position
//The following example queries for all documents where the second element in the array dim_cm is greater than 25:
db.inventory.find( { "dim_cm.1": { $gt: 25 } } );

//Query an Array by Array Length
db.inventory.find( { "tags": { $size: 3 } } );

///////////////////////////////////////////////////////////////////////////////////////////////
// Query an Array of Embedded Documents
db.inventory.insertMany( [
   { item: "journal", instock: [ { warehouse: "A", qty: 5 }, { warehouse: "C", qty: 15 } ] },
   { item: "notebook", instock: [ { warehouse: "C", qty: 5 } ] },
   { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 15 } ] },
   { item: "planner", instock: [ { warehouse: "A", qty: 40 }, { warehouse: "B", qty: 5 } ] },
   { item: "postcard", instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);

db.inventory.find( { "instock": { warehouse: "A", qty: 5 } } )
db.inventory.find( { "instock": { $elemMatch: { qty: 5, warehouse: "A" } } } )



Return All But the Excluded Fields

Instead of listing the fields to return in the matching document, you can use a projection to exclude specific fields. The following example which returns all fields except for the status and the instock fields in the matching documents:

db.inventory.find( { status: "A" }, { status: 0, instock: 0 } )


db.inventory.find({"instock.qty":{$gt:39 }}).pretty();



db.inventory.insertMany( [
  { item: "journal", status: "A", size: { h: 14, w: 21, uom: "cm" }, instock: [ { warehouse: "A", qty: 5 } ] },
  { item: "notebook", status: "A",  size: { h: 8.5, w: 11, uom: "in" }, instock: [ { warehouse: "C", qty: 5 } ] },
  { item: "paper", status: "D", size: { h: 8.5, w: 11, uom: "in" }, instock: [ { warehouse: "A", qty: 60 } ] },
  { item: "planner", status: "D", size: { h: 22.85, w: 30, uom: "cm" }, instock: [ { warehouse: "A", qty: 40 } ] },
  { item: "postcard", status: "A", size: { h: 10, w: 15.25, uom: "cm" }, instock: [ { warehouse: "B", qty: 15 }, { warehouse: "C", qty: 35 } ] }
]);


//Return All But the Excluded Fields
//Instead of listing the fields to return in the matching document, you can use a projection to exclude specific fields. The following example which returns all fields except for the status and the instock fields in the matching documents:
// return all fields except status and instock as they are set to rejection
db.inventory.find( { status: "A" }, { status: 0, instock: 0 } )


//Query and Projection Operators
// https://docs.mongodb.com/manual/reference/operator/query/#query-selectors