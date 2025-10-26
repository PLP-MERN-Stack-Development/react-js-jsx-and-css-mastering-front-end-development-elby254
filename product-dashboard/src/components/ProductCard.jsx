import {useState} from 'react';

export default function productCard ({product, onDelete, onEdit}) {
    const [edit, setEdit] = useState (false);
    const [draft, setDraft] = useState (product);

    return (
        <div className="border rounded-xl p-4 bg-white shadow-sm">
            {!edit ? (
               <div className="flex-justify-between">
                  <div>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-slate-600">{product.description}</p>
                      <p className="text-slate-600 text-sm">price: {product.price}</p>
                  </div>
                  <div className="flex gap-2">
                        <button onClick={() => setEdit (true)} className="border text-sm rounded-lg px-3 py-1">Edit</button>
                        <button onClick={() => onDelete (product._id)} className="text-white rounded-lg px-3 py-1 bg-red-600">Delete</button>
                  </div>
               </div>

            ) : (
                <form>
                    <input
                        className="border rounded-lg px-3 py-1 w-full"
                        value={draft.name}
                        onChange={(e) => setDraft ({...draft, name: e.target.value})}/>
                        
                    <input
                        className="border rounded-lg px-3 py-1 w-full"
                        value={draft.description}
                        onChange={(e) => setDraft ({...draft, description: e.target.value})}/>

                    <input
                        className="border rounded-lg px-3 py-1 w-full"
                        value={draft.price}
                        onChange={(e) => setDraft ({...draft, price: Number (e.target.value)})}/>

                    <div>
                        <button className= "bg-green-600 text-white px-3 py-1 rounded-lg text-sm">Save</button>
                        <button type="button" onClick={() => setEdit (false)} className="border px-3 py-1 rounded-lg text-sm">Cancel</button>
                    </div>
                </form>

             )}
        </div>
    );
}