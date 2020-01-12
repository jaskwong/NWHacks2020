CREATE TABLE volunteer (
    v_usnm VARCHAR(25) PRIMARY KEY,
    v_pswd VARCHAR(20),
    v_name VARCHAR(250),
    v_age int
);

CREATE TABLE organization (
    o_usnm VARCHAR(25),
    o_pswd VARCHAR(20),
    o_name VARCHAR(250),
    o_address VARCHAR(100)
);

CREATE TABLE event (
    e_name VARCHAR(250),
    e_address VARCHAR(100),
    e_time TIMESTAMP,
    o_usnm VARCHAR(25),
    foreign key (o_usnm) references organization,
    PRIMARY KEY (o_usnm, e_name)
);

CREATE TABLE attending (
    v_usnm VARCHAR(25),
    o_usnm VARCHAR(25),
    e_name VARCHAR(250),
    foreign key (o_usnm) references organization,
    foreign key (v_usnm) references volunteer,
    foreign key (e_name) references event,
    PRIMARY KEY (o_usnm, e_name, v_usnm);

);

INSERT INTO volunteer VALUES ("a", "pswd", "Jasmine", 19);
INSERT INTO volunteer VALUES ("b", "pswd", "Leo", 19);
INSERT INTO volunteer VALUES ("c", "pswd", "John", 21);
INSERT INTO volunteer VALUES ("d", "pswd", "Thomas", 25);
INSERT INTO volunteer VALUES ("e", "pswd", "Crystal", 22);
INSERT INTO volunteer VALUES ("f", "pswd", "Justin", 20);
INSERT INTO volunteer VALUES ("g", "pswd", "Dominic", 30);
INSERT INTO volunteer VALUES ("h", "pswd", "Alexandra", 45);

INSERT INTO organization VALUES (1, "Canadian Red Cross", "209 W 6th Ave, Vancouver, BC V5Y 1K7");
INSERT INTO organization VALUES (2, "Fair Haven Homes Society", "7557 Sussex Ave Burnaby, BC V5S 1G7");
INSERT INTO organization VALUES (3, "West End Seniors Network", "Barclay Manor 1447 Barclay Street Vancouver, BC V6G 1J6");
INSERT INTO organization VALUES (4, "Yaletown House Society", "Yaletown House 1099 Cambie St. Vancouver, BC V6B 5A8");
INSERT INTO organization VALUES (5, "A.S.K Friendship Society", "2177 West 42nd Ave Vancouver, BC");
INSERT INTO organization VALUES (6, "The New Vista Society", "7550 Rosewood Street Burnaby, BC V5E 3Z3");
INSERT INTO organization VALUES (7, "Lower Mainland Christmas Bureau", "1870 Pandora st Vancouver, BC");
INSERT INTO organization VALUES (8, "Seniors Services Society", "750 Carnarvon Street New Westminster, BC V3M 1E7");

