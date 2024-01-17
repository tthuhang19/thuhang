function validateForm(){
    var x;
    x=document.forms["frm_dk"]["ho"].value;
    if(x==""){
        alert('Bạn chưa nhập họ');
        return false;
    }
    x=document.forms["frm_dk"]["ten"].value;
    if(x==""){
        alert('Bạn chưa nhập tên');
        return false;
    }
    x=document.forms["frm_dk"]["sdt"].value;
    if(isNaN(x)||length(x)==0||length(x)>10){
        alert('điện thoại phải là số, hãy nhập lại');
        return false;
    }
}