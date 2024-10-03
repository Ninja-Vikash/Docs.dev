console.log("Docs.dev")

console.log(this)

let user = { 
    name: "docs.dev",
    docName: function () {
        console.log(`You are viewing ${this.name}`)
    }
}
user.docName()
