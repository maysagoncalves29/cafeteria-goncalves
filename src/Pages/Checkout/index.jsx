const submit = async () =>{
    await addDoc(collection(db, "produtos")), {
        categoryId,
        description,
        image,
        price,
        stock,
        title
    }
}