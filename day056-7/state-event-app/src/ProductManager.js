import React, { useState } from "react";

const ProductManager = () => {
	const [product, setProduct] = useState({
		productName: "",
		price: "",
		stock: "",
		maker: "",
	});

	const [productList, setProductList] = useState([
		{
			productName: "삼성노트북",
			price: 100,
			stock: 10,
			maker: "삼성",
		},
		{
			productName: "LG노트북",
			price: 200,
			stock: 20,
			maker: "LG",
		},
		{
			productName: "애플노트북",
			price: 300,
			stock: 30,
			maker: "애플",
		},
	]);

	const handleProduct = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};

	const handleSave = () => {
		// 기존의 상품목록에 새로운 상품을 추가해서 새로운 상품목록을 만들어서 적용
		setProductList([...productList, product]);
        handleInit();
	};

	const handleInit = () => {
		setProduct({
			productName: '',
			price: 0,
			stock: 0,
			maker: "",
		});
	};

	// 상품목록 생성 함수 정의
	const productUIList = productList.map((product, i) => (
		<tr key={i}>
			<td>{product.productName}</td>
			<td>{product.price}</td>
			<td>{product.stock}</td>
			<td>{product.maker}</td>
			<td>
				<button>선택</button>
				<button>삭제</button>
			</td>
		</tr>
	));

    const handleSelect = (pro) => {
        setProduct(pro);
    }

    const handleDelete = (pro) => {
        // 기존의 상품목록에서 선택된 상품을 제외한 나머지 상품목록을 만들어서 적용
        const filterList = productList.filter((p)=>p.productName !== pro.productName);
        setProductList(filterList);
    }

	return (
		<div>
			<h1>상품관리</h1>
			제품명:{" "}
			<input
				type="text"
				name="productName"
				value={product.productName}
				onChange={handleProduct}
			/>
			<br />
			가격: <input type="text" name="price" value={product.price} onChange={handleProduct} />
			<br />
			제고: <input type="text" name="stock" value={product.stock} onChange={handleProduct} />
			<br />
			제조사:{" "}
			<input type="text" name="maker" value={product.maker} onChange={handleProduct} />
			<br />
			<button onClick={handleSave}>저장</button>
			<button onClick={handleInit}>초기화</button>
			<hr />
			<table>
				<thead>
					<tr>
						<th>제품명</th>
						<th>가격</th>
						<th>제고</th>
						<th>제조사</th>
						<th>선택/삭제</th>
					</tr>
				</thead>
				<tbody>
                    {/* {productUIList} */}
					{productList.map((product, i) => (
						// ui 요소에 반복적으로 map을 이용해 바인딩하는 경우 ui 요소에 key 속성을 유일값으로 바인딩
						<tr key={i}>
							<td>{product.productName}</td>
							<td>{product.price}</td>
							<td>{product.stock}</td>
							<td>{product.maker}</td>
							<td>
								<button onClick={()=>handleSelect(product)}>선택</button>
								<button onClick={()=>handleDelete(product)}>삭제</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductManager;
