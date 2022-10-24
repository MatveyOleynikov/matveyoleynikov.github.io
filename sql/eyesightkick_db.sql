create database eyesightkick;
use eyesightkick;

create table users(
	user_id int not null primary key auto_increment,
    `name` varchar(30),
    `email` varchar(80),
    `password` varchar(30)
);

alter table users 
modify `name` varchar(30) not null ,
modify `email` varchar(80) not null,
modify  `password` varchar(30) not null;


create table lists_of_exercises(
  list_id int not null primary key auto_increment,
 `name` varchar(30) not null,
 `description` text
);

create table exercises(
	exercise_id int not null primary key auto_increment,
    `name` varchar(30) not null,
    `description` text,
    list_id int,
    foreign key (list_id) references lists_of_exercises(list_id)

);

create table subscriptions(
	subscription_id int not null primary key auto_increment,
    `name` varchar(50) not null,
    price int not null,
    time_interval int not null
);

create table subscriptions_users(
	subscription_id int not null,
    user_id int not null,
    end_date date not null,
    primary key (subscription_id, user_id),
    foreign key (subscription_id) references subscriptions(subscription_id),
    foreign key (user_id) references users(user_id)
);

create table  users_exercises(
	user_id int not null,
    exercise_id int not null,
    foreign key (user_id) references users(user_id),
    foreign key (exercise_id) references exercises(exercise_id),
    `date` date not null,
    primary key (user_id, exercise_id, `date`)
);

