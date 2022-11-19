// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// import configDB from './configDB.js'
const {DataTypes, Sequelize} = require('sequelize');
const configDB = require('./config/configDB')

const sequelize = new Sequelize(
    configDB.name,
    configDB.user,
    configDB.password,
    {
        host: configDB.host,
        dialect: configDB.dialect
    }
);

const Subscription = require('./model/subscription')(sequelize);
const User = require("./model/user")(sequelize);
const listsOfExercises = require('./model/lists_of_exercises')(sequelize);
const Exercise = require('./model/exercise')(sequelize);
const Train = require('./model/train')(sequelize);

// связь списка упражнений с упражнениями
listsOfExercises.hasMany(Exercise,
    {
        foreignKey:'list_id'
    }
)

Exercise.belongsTo(listsOfExercises,
    {
        foreignKey:'list_id'
    })


// Пользователь- подписка связь.
const SubscriptionUser = sequelize.define('subscriptions_users',
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, 
                key: 'user_id'
            }
            
        },

        subscription_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Subscription, 
                key: 'subscription_id'
            }
        },

        end_date: {
            type: DataTypes,
            allowNull: false
        }

    },

    {
        timestamps: false
    },

    {
        tableName: 'subscriptions_users'
    }
);

User.belongsToMany(Subscription, {through: SubscriptionUser, foreignKey: 'user_id'})
Subscription.belongsToMany(User, {through: SubscriptionUser, foreignKey: 'subscription_id'})

// Связь пользователь-упражнение
const UserExercise = sequelize.define('users_exercises',

    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User, // или 'Movies'
                key: 'user_id'
            },
            primaryKey: true
        },

        exercise_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Exercise, // или 'Movies'
                key: 'exercise_id'
            },
            primaryKey: true
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false,
            primaryKey: true
        },

        number_of_attempts: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },

    {
        timestamps: false
    },

    {
        tableName: 'users_exercises'
    }
    

)

User.belongsToMany(Exercise, {through: UserExercise, foreignKey: 'user_id'})
Exercise.belongsToMany(User, {through: UserExercise, foreignKey: 'exercise_id'})


//связь пользователь-тренировка
User.hasMany(Train, {foreignKey : 'user_id'});
Train.belongsTo(User, {foreignKey : 'user_id'})

// связь тренировка-упражнение
const TrainExercise = sequelize.define('train_exercises',
    {
        train_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Train, // или 'Movies'
                key: 'train_id'
            },
            primaryKey: true
        },

        exercise_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Exercise, // или 'Movies'
                key: 'exercise_id'
            },
            primaryKey: true
        },
    },
    {
        timestamps: false
    },

    {
        tableName: 'train_exercises',
    },

    {
        freezeTableName: true,
    }
)

Train.belongsToMany(Exercise, {through: TrainExercise, foreignKey: 'train_id'})
Exercise.belongsToMany(Train, {through: TrainExercise, foreignKey: 'exercise_id'})
const TrainToExercise = new TrainExercise

// экспрорт  базы данных
const db = {
    Subscription,
    User,
    listsOfExercises,
    Exercise,
    Train,
    TrainToExercise
}

module.exports = db

// const new_user =  User.create({name: 'user2', email: 'radnd@gmail.com', password: 'password'});
//new_user.destroy();
// const subscription = Subscription.create({name:'usually', price : 299, time_interval: 30})
// const now = new Date();
// const subscription_user = SubscriptionUser.create({user_id: 2, subscription_id: 1, end_date: new Date()})
// const list =  listsOfExercises.create({name: 'техника Бучки', description: 'adfjsfasldjfadsdsfadfsdfsdfadafdafsafsddfsafasd'});
// const exercise = Exercise.create({name: 'техника', description: 'abcabc', list_id: 1} );
// const userExercise = UserExercise.create({user_id: 2, exercise_id: 1,  date: new Date(), number_of_attempts: 100 }); 

// let first = Subscription.findOne({include: User}).then((res)=>{
//     let json = res.toJSON
//     console.log(JSON.stringify(res, null, 2))
// } 
// )

// const train = Train.create({name: 'first', user_id : 1}).then(res => {
//     console.log(res);
// })

// Train.findAll(
//     {
//         include : [User, Exercise]
//     }
// ).then(res => {
//     console.log(JSON.stringify(res, null, 2))
// })

// Exercise.findAll().then(res => {
//     console.log(JSON.stringify(res, null, 2))
// })

// async function func(){
//     const train = await Train.findOne({where : {train_id : 5}});
//     const exercise = await Exercise.findOne();
//    exercise.name = 'fhksdgf'
//     console.log(JSON.stringify(train, null, 2))
//     console.log(JSON.stringify(exercise, null, 2))
//     // console.log(exercise) 
//      train.addExercise(exercise);   
// }

// func()
// TrainToExercise.create({train_id: 5, exercise_id : 1}).then(rs => {
//     console.log(rs);
// })

//  const train = Train.findOne({include: Exercise}).then(res => {
//     tasks
//  })

//  const func = async () => {
//     const train_id = 1
//     const train = await Train.findOne(
//         {
//             where: {
//                 train_id: train_id
//             }
//         }
//     );
//     const exercises = await train.getExercises();
//     console.log(JSON.stringify(exercises, null, 2));
//  }

//  func();