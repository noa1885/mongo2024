use catlogDB
db.books.find({})

db.books.update({pageCount:1234},
{$set:{title:"1,2,3,4,",status:'PUBLISH'}},
{upsert:true}
)
//2
db.books.update({title:/^b/i}
,{$unset:{publishedDate:true}})
//3
db.books.updateOne({status:'PUBLISH',publishedDate:{$exists:false}},
{$currentDate:{publishedDate:true}}
)  

//5
//db.books.updateOne({categories:{$elemMatch:/java/i}},
//{$set:{price:1.1*price}});
//6
db.books.update({title:/c#/i}
,{$set:{pageCount:-20}}
,{$currentDate:{lastModiifiled:true}})
//7
db.books.update({},
{$min:{pageCount:0}},
{$currentDate:{lastModiipages:true}})
//8
db.books.update({},
{$rename:{lastModiipages:lastModiifiled}})
//9
db.books.update({},
{$max:{pageCount:1000}})
//10

db.books.update({categories:{$size:0},},
{$unset:{categories:true}})

