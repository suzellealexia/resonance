To deploy on Railway,

1- In  the .env file we have to add the 

SKIP_ENV_VALIDATION=true

2- Since the prisma generated file is not commited to git we also have to add 
"postinstall": "prisma generate"

in package.json under the scripts section

