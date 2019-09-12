
USE vo1z37ay8akyim75;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);
