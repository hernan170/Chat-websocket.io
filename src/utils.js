import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, Path.join(process.cwd(), 'src', 'public', 'images'))
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)//guarda el archivo dentro de images con el nombre original cargado.
    }
})

export const uploader = multer({ storage})