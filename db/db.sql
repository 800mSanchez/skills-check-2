CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price NUMERIC NOT NULL,
    image TEXT NOT NULL
);

SELECT * FROM products;

INSERT INTO products (name, price, image) VALUE ('shoes', 36, 'https://images.ctfassets.net/od02wyo8cgm5/5kpFyd0r2uP97j7TIwahLc/49be548876c61e93ac58efab04906d5f/cloud_waterproof_2-fw19-black_lunar-w-g1.png
')