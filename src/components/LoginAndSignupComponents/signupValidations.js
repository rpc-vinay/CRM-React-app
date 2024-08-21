export const isNull = (userDetails, key) => {
	if(
        userDetails === undefined || 
        userDetails === null || 
        userDetails[key] === undefined || 
        userDetails[key] === "" || 
        userDetails[key] === '' 
    ){
        return false;
    }else{
        return true;
    }
};


export const signupLoginValidation = (userDetails, setErrorIds, section) => {
    var status = true ;
	let errorIds=[];

    if(section === "userId"){
        if(!isNull(userDetails, "email")){
            errorIds.push("email");
            status=false;
        }
    };

    if(section === "register"){
        let allKeys = ["name", "email", "mobile", "gstin"];

        allKeys.forEach(eachKey=>{
            if(!isNull(userDetails, eachKey)){
                errorIds.push(eachKey);
                status=false;
            }
        })
    };
	
	setErrorIds(errorIds);
	return status;
};