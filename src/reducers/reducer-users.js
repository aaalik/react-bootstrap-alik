/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Abdul",
            last: "Malik",
            npm: 50414036,
            kelas: "4IA06",
            jurusan: "Teknik Informatika",
            thumbnail: "/img/alek.jpg"
        },
        {
            id: 2,
            first: "Joby",
            last: "Wasilenko",
            npm: 53414887,
            kelas: "4IZ01",
            jurusan: "Teknik Pertahanan Sipil",
            thumbnail: "/img/alek.jpg"
        },
        {
            id: 3,
            first: "Madison",
            last: "Williams",
            npm: 59414123,
            kelas: "4IG01",
            jurusan: "Teknik Peternakan Buaya",
            thumbnail: "/img/alek.jpg"
        }
    ]
}
