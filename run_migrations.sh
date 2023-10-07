. ./.env

echo "Running migrations ..."

psql -h ${HOST} -U ${USER} -d ${DATABASE_NAME} -a -f src/infra/database/migrations.sql 

echo "Migrations runned successfully!"