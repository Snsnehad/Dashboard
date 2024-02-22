export const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 4000,
  },
  {
    name: "Apr",
    "Active User": 2000,
  },
  {
    name: "May",
    "Active User": 1000,
  },
  {
    name: "July",
    "Active User": 3000,
  },
  {
    name: "Aug",
    "Active User": 4000,
  },
  {
    name: "Sept",
    "Active User": 2000,
  },
  {
    name: "Oct",
    "Active User": 1000,
  },
  {
    name: "Nov",
    "Active User": 4000,
  },
  {
    name: "Dec",
    "Active User": 2000,
  },
];


export const productData = [
  {
    name: "Jan",
    "Sales": 4000,
  },
  {
    name: "Feb",
    "Sales": 3000,
  },
  {
    name: "Mar",
    "Sales": 4000,
  },
  {
    name: "Apr",
    "Sales": 2000,
  },
];

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "User",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.userName}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
  },
  {
    field: "transaction",
    headerName: "Transaction Volume",
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <button className="userListEdit">Edit</button>
          <DeleteIcon className="userListDelete" />
        </>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 5,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 7,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 8,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 9,
    userName: "Jon Snow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT00rejWha1fvpXc8Njcbd4oSt27V8EDKosCA&usqp=CAU",
    email: "jon@gmail.com",
    status: "active",
   price: "$120.00",
  },
];


export const productRows = [
  {
    id: 1,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
  {
    id: 3,
    name: "Apple Airpods",
    img:
     "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img:
     "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img:
     "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
  {
    id: 6,
    name: "Apple Airpods",
    img:
     "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
  {
    id: 7,
    name: "Apple Airpods",
    img:
     "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
  {
    id: 8,
    name: "Apple Airpods",
    img:
     "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
  {
    id: 9,
    name: "Apple Airpods",
    img:
     "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
   stock: 123,
   status: "active",
   price: "$120.00",
  },
];