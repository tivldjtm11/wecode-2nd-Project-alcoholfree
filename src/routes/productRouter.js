const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const verfiyToken = require("../middlewares/verfiyToken");


// 메인
router.get('/main', verfiyToken.verfiyToken, productController.selectProduct);

// 장바구니 유저 배송정보 불러오기
router.post("/costUser", verfiyToken.verfiyToken, productController.selectUserInfo);

// 장바구니 상품 포인트 결제
router.post("/costPay", verfiyToken.verfiyToken, productController.cost);

// 장바구니 보기
router.get("/cart", verfiyToken.verfiyToken,  productController.shoppingItems);

// 장바구니 상품 갯수 수정
router.patch("/cart/:id", verfiyToken.verfiyToken, productController.itemUpdate);

// 장바구니 상품 삭제
router.delete("/cart/:id", verfiyToken.verfiyToken, productController.deleteItems);

// 상세 보기
router.get("/detail/:id", verfiyToken.verfiyToken, productController.detailPage);

// 상세 보기 페이지에서 값 추가
// router.post("/detail", verfiyToken.verfiyToken, productController.createShoppingItem);

// 상품 상세 보기
// router.get("/detail", verfiyToken.verfiyToken, productController.detailProduct);

// // 상품 장바구니 추가
router.post("/detail", verfiyToken.verfiyToken, productController.setShoppingItems);

// 좋아요
// router.post("/detail", verfiyToken.verfiyToken, productController.likeProducts);
module.exports ={
    router
}

