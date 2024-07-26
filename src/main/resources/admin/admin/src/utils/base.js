const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootb1g8z/",
            name: "springbootb1g8z",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootb1g8z/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "酒店管理系统"
        } 
    }
}
export default base
