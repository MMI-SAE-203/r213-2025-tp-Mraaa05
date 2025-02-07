import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090/');

export async function allMaisons() {
    let records = await pb.collection("Maison").getFullList();
    records= records.map((record) => {
        record.imgnUrl = pb.files.getURL(record, record.image);
        return record;
    });
    return records;

}
export async function oneID(id) {
    const oneRecord = await pb.collection('Maison').getOne(id)
    return oneRecord;
}



    export async function bySurface(s) { 
        const maisonSurface = await pb.collection('Maison').getFullList({
            filter: `surface > ${s}`,
        });
        return maisonSurface; 
    }
    
  