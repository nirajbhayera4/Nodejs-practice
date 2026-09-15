const fs=require("fs"
);
const path=require("path"
);

const command=process.argv[2];
const note=process.argv[3];



const datafolder=process.env.DATA_FOLDER;
const filepath=path.join(datafolder, "notes.json");

if(command==="add"){
    // this format is simple text format 
/*
    const notes=[
        {
            id:1,
            text: note
        }
    ];
    fs.writeFile(filepath, JSON.stringify(notes, null,2),(err)=>{
        if(err){
            console.log("error writing file ",err.message);
            return ;
        }
        console.log("note added successfully");
    })
        */

    // to convert the notes into json format 
    fs.readFile(filepath, "utf8", (err, data)=>{
        if(err){
            console.log("error:",err.message);
            return ;
        }
        const notes=JSON.parse(data);
        console.log(notes);
    })
}

