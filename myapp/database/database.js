const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
})



async function getdata(){
    const sql = `select  "Country/Region" as Country , lat , long , "Province/State" as State , confirmed_csv."3/23/2020" as confirm ,  death_csv."3/23/2020" as dead ,  recovered_csv."3/23/2020" as recover
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num and  (confirmed_csv."3/23/2020" != 0 or  death_csv."3/23/2020" !=0 or recovered_csv."3/23/2020"!=0)`
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}
async function getsum(){
    const sql = `select  sum(confirmed_csv."3/23/2020") as confirm , sum(death_csv."3/23/2020") as death , sum(recovered_csv."3/23/2020") as recovered 
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num `
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}

async function getmap(){
    const sql = `select "Province/State" as province , "Country/Region" as country,long ,lat ,confirmed_csv."3/23/2020" as confirm ,  death_csv."3/23/2020" as dead ,  recovered_csv."3/23/2020" as recover
    from city_csv,confirmed_csv,death_csv,recovered_csv
    where city_csv.num = confirmed_csv.num and city_csv.num = death_csv.num and city_csv.num = recovered_csv.num `
    const data = await pool.query(sql);
    // console.log(data);
    return data;

}


module.exports = {
    getdata,
    getsum,
    getmap

}