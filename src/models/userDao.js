<<<<<<< HEAD
const database = require("../utils/database")

  // 요청 이메일 존재 여부 확인
const selectUserDataByEmail = async(email) => {

    const result = await database.appDataSource.query(
      `
      SELECT 
        id,
        email
      FROM USERS
      WHERE email = ?
      `, [email]
    )
      return result;
}

// 회원가입
  const signup = async(email, password, name, phoneNumber, birthDay, address) => {
    try{
        const result = await database.appDataSource.query(
            `
            INSERT INTO USERS (email, password, name, phoneNumber, birthDay, address) 
            VALUES
            (? ,? ,? ,? ,? ,?)
            `,[email, password, name, phoneNumber, birthDay, address]
        )
        return result;
    }catch(err){
        console.log(err);
        const error = new Error();
        error.message = "회원가입 도중 에러가 발생하였습니다"
        throw error;
    }

}

module.exports = {
  selectUserDataByEmail, signup
=======
const { DataSource } = require('typeorm');
const path = require("path")
const envFilePaht = path.resolve(__dirname, "../utils", ".env");
const dotenv = require("dotenv")
dotenv.config({path :envFilePaht });

const myDataSource = new DataSource({
	type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE
})

myDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error occurred during Data Source initialization", err);
	//   myDataSource.destroy();
  });


  const signup = async () => {
	try {
		const result = myDataSource.query(
            `
            `
        )
	} catch (err) {
		const error = new Error('INVALID_DATA_INPUT');
		error.statusCode = 500;
		throw error;
	}
};


module.exports = {
    signup
>>>>>>> main
}