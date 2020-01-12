drop table attending;
drop table events;
drop table organization;
drop table volunteer;

CREATE TABLE volunteer (
    v_usnm VARCHAR(25) PRIMARY KEY,
    v_pswd VARCHAR(20),
    v_name VARCHAR(250),
    v_age int
);

CREATE TABLE organization (
    o_usnm VARCHAR(25) PRIMARY KEY,
    o_pswd VARCHAR(20),
    o_name VARCHAR(250),
    o_address VARCHAR(100)
);

CREATE TABLE events (
    e_id int PRIMARY KEY,
    e_address VARCHAR(100),
    e_time TIMESTAMP,
    e_numppl int,
    o_usnm VARCHAR(25),
    foreign key (o_usnm)
        references organization(o_usnm)
);

CREATE TABLE attending (
    v_usnm VARCHAR(25),
    e_id int,
    PRIMARY KEY (e_id, v_usnm),
    foreign key (v_usnm)
        references volunteer(v_usnm),
    foreign key (e_id)
        references events(e_id)
        
);


INSERT INTO volunteer VALUES ("a", "pswd", "Jasmine", 19);
INSERT INTO volunteer VALUES ("b", "pswd", "Leo", 19);
INSERT INTO volunteer VALUES ("c", "pswd", "John", 21);
INSERT INTO volunteer VALUES ("d", "pswd", "Thomas", 25);
INSERT INTO volunteer VALUES ("e", "pswd", "Crystal", 22);
INSERT INTO volunteer VALUES ("f", "pswd", "Justin", 20);
INSERT INTO volunteer VALUES ("g", "pswd", "Dominic", 30);
INSERT INTO volunteer VALUES ("h", "pswd", "Alexandra", 45);

INSERT INTO organization VALUES ("CRC", "pswd", "Canadian Red Cross", "209 W 6th Ave, Vancouver, BC V5Y 1K7");
INSERT INTO organization VALUES ("FHHS", "pswd", "Fair Haven Homes Society", "7557 Sussex Ave Burnaby, BC V5S 1G7");
INSERT INTO organization VALUES ("WESN", "pswd", "West End Seniors Network", "Barclay Manor 1447 Barclay Street Vancouver, BC V6G 1J6");
INSERT INTO organization VALUES ("YHS", "pswd", "Yaletown House Society", "Yaletown House 1099 Cambie St. Vancouver, BC V6B 5A8");
INSERT INTO organization VALUES ("ASKFS", "pswd", "A.S.K Friendship Society", "2177 West 42nd Ave Vancouver, BC");
INSERT INTO organization VALUES ("TNVS", "pswd", "The New Vista Society", "7550 Rosewood Street Burnaby, BC V5E 3Z3");
INSERT INTO organization VALUES ("LMCB", "pswd", "Lower Mainland Christmas Bureau", "1870 Pandora st Vancouver, BC");
INSERT INTO organization VALUES ("SSS", "pswd", "Seniors Services Society", "750 Carnarvon Street New Westminster, BC V3M 1E7");

INSERT INTO events VALUES (1, "209 W 6th Ave, Vancouver, BC V5Y 1K7", TIMESTAMP ('2020-01-16 08:00:00'), 3, "CRC");
