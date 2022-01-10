
export const setData = (data) => {
	return {
		type: "DATA",
		data,
	}
};


export const  saveThisSectionData = (data) =>async(dispatch)=>{
	try{
		const response = await saveThisSection(data)
		if(!response.error){
	    // toast.success(response.Message);
		//dispatch(setLogin(response.userid));
		}
		else{
			// toast.error(response.Message);
		}
	}catch (e) {
		console.log(e);
	}
}





