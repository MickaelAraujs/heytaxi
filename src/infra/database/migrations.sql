DROP TABLE IF EXISTS drivers;
DROP TABLE IF EXISTS passengers;

CREATE TABLE IF NOT EXISTS drivers (
	driver_id uuid NOT NULL DEFAULT uuid_generate_v4(),
	name varchar NOT NULL,
	email varchar NOT NULL,
	"document" varchar NOT NULL,
	car_plate varchar NOT NULL,
	CONSTRAINT drivers_pkey PRIMARY KEY (driver_id)
);

CREATE TABLE IF NOT EXISTS passengers (
	passenger_id uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	"document" varchar NOT NULL,
	CONSTRAINT passengers_pkey PRIMARY KEY (passenger_id)
);