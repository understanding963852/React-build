

##   [.gitignore 이용해 git에 추가되지 말아야 할 파일 정의하기](https://kotlinworld.com/269) 


  <img src="https://user-images.githubusercontent.com/60366769/230711765-3c32114d-3b5b-41b9-b87a-614f08d953fd.png"  width="500">


-----------------------------------------
- build폴더를 push할 필요없음


- github pages 라이브러리를 나의 프로젝트에 다운받기

    `
    PS C:\D\rock> npm install gh-pages
    `

- github pages 라이브러리를 통해 build폴더를 github에 올리기

<img src="https://understanding963852.github.io/img/build2.png" width="800">

<img src="https://user-images.githubusercontent.com/60366769/230750915-44c31ecf-75e0-4579-ac11-d2ff99c6d32d.png" width="500">



`
PS C:\D\rock> npm run build
`
- ⬇️ 아래내용을 적으며 build폴더가 github에 올라간다

`
C:\D\rock>npm run deploy
`



- github를 조금 기다리면 ⬇️ 아래와 같이 변경된것을 확인할수 있다.


![image](https://user-images.githubusercontent.com/60366769/230711527-e778ad93-1bfc-47b8-b2b5-68c1293f0ef0.png)



![image](https://user-images.githubusercontent.com/60366769/230711438-cca6f6a3-d313-4713-88cb-eb60bb91b195.png)


주소를 실행하면 실행하는것을 볼수 있다.



