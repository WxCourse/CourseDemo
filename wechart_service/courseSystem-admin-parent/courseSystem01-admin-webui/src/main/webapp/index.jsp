<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <base href="http://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}/">
    <script src="juqery/jquery-2.1.1.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function (){
            $("#btn1").click(function(){
                $.ajax({
                    "url":"send/array/one.html",
                    "type":"post",
                    "data":{
                        //在服务器端  我们需要使用 @RequestParam("array[]")  需要在array后面加一个 【】
                        "array":[1,2,3]
                    },
                    "dataType":"text",
                    "success":function (response){
                        alert(response)
                    },
                    "error":function (response){
                        alert(response)
                    }
                })
            });

            $("#btn2").click(function(){

                //准备好需要传入服务器的数据
                let array = [4,5,6];

                //将 JSON 数组的格式 ，转化为字符串格式的  这样服务器端就可以直接使用 key 值，而不需要加[]
                let requestBody = JSON.stringify(array);
                $.ajax({
                    "url":"send/array/two.html",
                    "type":"post",
                    "data":requestBody,
                    "contentType": "application/json;charset=UTF-8", //设置请求体的内容类型，告诉服务器此次请求体是JSON数据类型
                    "dataType":"text",  //如何对待服务器发过来的数据  这里是将服务器发过来的数据当做 text文件
                    "success":function (response){
                        alert(response)
                    },
                    "error":function (response){
                        alert(response)
                    }
                })
            });

            $("#btn3").click(function(){

                //准备好需要传入服务器的数据
                let student = {
                    "name"  :"lisi",
                    "age"   :"18",
                    "gender":"0",
                    "address":{
                        "city":"长沙",
                        "province":"湖南"
                    },
                    "subjectList":[
                            {
                                "subjectName":"数学",
                                "subjectScore":80
                            },
                            {
                                "subjectName":"语文",
                                "subjectScore":90
                            }
                        ]
                }

                //将 JSON 数据格式 转化为字符串格式的
                let requestBody = JSON.stringify(student);
                $.ajax({
                    "url":"send/compose/object.json",
                    "type":"post",
                    "data":requestBody,
                    "contentType": "application/json;charset=UTF-8", //设置请求体的内容类型，告诉服务器此次请求体是JSON数据类型
                    "dataType":"json",  //如何对待服务器发过来的数据  这里是将服务器发过来的数据当做 json 数据
                    "success":function (response){
                        console.log(response)
                    },
                    "error":function (response){
                        console.log(response)
                    }
                })
            });
        })
    </script>
</head>
<body>
        <a href="test/ssm.html">整合 ssm </a>
        <br><br>

        <button id="btn1">发送数组【1，2，3】</button>
        <br><br>

        <button id="btn2">发送数组【4，5，6】</button>
        <br><br>

        <button id="btn3">发送复杂对象</button>
</body>
</html>
