create schema if not exists LiftOffDatabase

use liftoffdatabase
create table if not exists RoomTypes
(id int,
roomType varchar(50)
);

create table if not exists Products
(id int not null auto_increment,
pname varchar(100),
description varchar(250),
price float,
roomid int,
pimage varchar(250),
primary key(id));

insert into roomtypes values(101,"Living");
insert into roomtypes values(102,"Bedroom");
insert into roomtypes values(103,"Kitchen");
insert into roomtypes values(104,"Dining");
insert into roomtypes values(105,"Outdoors");

delete from products;
insert into products(pname,description,price,roomid,pimage) values("chair","Brown Chair",125,104,"ABCD1");
insert into products(pname,description,price,roomid,pimage) values("couch","Leather Couch",425,101,"ABCD1");
insert into products(pname,description,price,roomid,pimage) values("LoveSeat","Leather Loveseat",300,101,"ABCD2");
insert into products(pname,description,price,roomid,pimage) values("Coffee Table","Beautiful Brown table",350,101,"ABCD3");
insert into products(pname,description,price,roomid,pimage) values("Island Counter","2 ft X 1.5 Ft X 4 Ft",750,103,"ABCD1");

insert into products(pname,description,price,roomid,pimage) values("Dining Set","7-peice Set",750,104,"ABCD2");
insert into products(pname,description,price,roomid,pimage) values("Chair","Counter height Chair",150,103,"ABCD2");
insert into products(pname,description,price,roomid,pimage) values("Deck Set","5-peice set",850,105,"ABCD1");

alter table roomtypes
add constraint pk_room primary key(id);

alter table products
add constraint fk_roomid foreign key(id) references roomtypes(id) on delete cascade on update cascade;

alter table products
drop constraint fk_roomid;