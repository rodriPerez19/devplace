<html>
<head>
</head>
<body>
    <script language="JavaScript">
        var num1 = parseInt(prompt("Ingrese el primer valor: "));
        var num2 = parseInt(prompt("Ingrese el segundo valor: "));
        var num3 = parseInt(prompt("Ingrese el tercer valor: "));
        if (num1 >= num2 && num1 >= num3) {
            if (num2 > num3) {
                console.log(num1, num2, num3);
            } else {
                console.log(num1, num3, num2);
            }
        } else if (num2 >= num1 && num2 >= num3) {
            if (num1 > num3) {
                console.log(num2, num1, num3);
            } else {
                console.log(num2, num3, num1);
            }
        } else if (num3 >= num1 && num3 >= num2) {
            if (num1 > num2) {
                console.log(num3, num1, num2);
            } else {
                console.log(num3, num2, num1)
            }
        }
    </script>
</body>
</html>