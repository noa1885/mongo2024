db.getCollection("book").find({})
//6
db.book.deleteMany()({categories:{$size:0}});
//8
db.book.find({authors:"Robi Sen"},{title:1})
//9
db.book.find({ authors: { $all: [/a/i] } },{ title: 1, longDescription: 1 ,authors:1});
//10
db.book.find({categories:{$all: ['XML','Internet']}})
//11
db.book.find({categories: ['XML','Internet']})

//12
db.book.find({authors:""})
//13
db.book.find({'authors.0':""})
//14
db.books.countDocuments({ someField: { $not: { $type: "objectId" } }});
