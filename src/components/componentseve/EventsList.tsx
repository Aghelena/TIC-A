import { getEvents, deleteEvents } from '../../services/api';
import { useState, useEffect } from 'react';

interface Event {
    id: string;
    name: string;
    description: string;
    date: Date;
}

function Eventslist() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        try {
            const response = await getEvents();
            setEvents(response.data);
        } catch (error) {
            console.error("Erro ao carregar eventos:", error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteEvents(id);
            loadEvents();
        } catch (error) {
            console.error("Erro ao deletar evento:", error);
        }
    };

    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-white px-4 py-8">
            <div className="bg-[#62CDFF] rounded-lg shadow-lg p-6 w-full max-w-4xl">
                <div className="text-right mb-4">
                    <a href="/addEve" className="text-black font-medium hover:underline">Adicionar Evento</a>
                </div>
                <ul className="space-y-4">
                    {events.map((event) => (
                        <li key={event.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-50 rounded-lg shadow-md">
                            <div className="flex-1">
                                <p className="text-lg font-semibold text-gray-800">{event.name}</p>
                                <p className="text-black">{event.description}</p>
                                <p className="text-black">{new Date(event.date).toLocaleDateString()}</p>
                            </div>

                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <a href={`/editEve/${event.id}`} className="text-black hover:underline">Editar</a>
                                <button
                                    onClick={() => handleDelete(event.id)}
                                    className="text-[#D9D9D9] hover:underline"
                                >
                                    Deletar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Eventslist;
