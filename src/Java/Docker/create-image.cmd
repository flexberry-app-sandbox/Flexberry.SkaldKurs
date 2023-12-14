docker build --no-cache -f SQL\Dockerfile.PostgreSql -t skaldkurs-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t skaldkurs-java/app ../../..
