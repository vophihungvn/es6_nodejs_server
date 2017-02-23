# Database
In this project, i use [Sequelize](http://docs.sequelizejs.com/en/v3/) as an ORM to manage database.

1. [Setup](#setup)
2. [Create migration](#create_migration)
3. [Run migration](#run_migration)

<a name="setup"/>
1. Setup
------------------------------------------------------------------------------

We clone sample file (`/config/database.sample.js`) and rename it to `database.js` (will be ignored in `.gitignore` file)
Change setting to your own config with suitable enviroment (`development`, `beta` or `production`)

<a name="create_migration"/>
2. Create migration
------------------------------------------------------------------------------
- Make sure you have installed `sequelize-cli`
```npm i -g sequelize```
or ```npm i sequelize``` for local install
- Run ```sequelize migration:create [migration name]```, it will automatically create a migration file in `migrations` folder.
- Go to the file and do whatever you want

<a name="run_migration"/>
3. Run migration
------------------------------------------------------------------------------
Go to your shell and run ```sequelize db:migrate```
You can spectify enviroment by declare variable --env (default: development)
Example: 
```sequelize db:migrate --env beta```

To rollback your migrate, just run: ```sequelize db:migrate:undo```

Note: Run migrate may cause some problem with your data, it won't be rolled back. Do it carefully :D.

