import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEvents, getEventsById, updateEvents } from '../../services/api'; // Certifique-se de que esses métodos existam

interface Event {
    name: string;
    description: string;
    date: string;
}

function EventForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [event, setEvent] = useState<Event>({
        name: '',
        description: '',
        date: '',
    });

    useEffect(() => {
        if (id) {
            loadEvent();
        }
    }, [id]);

    const loadEvent = async () => {
        try {
            const response = await getEventsById(id as string);
            setEvent(response.data);
        } catch (error) {
            console.error("Erro ao carregar dados do evento", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updateEvents(id, event);
            } else {
                await createEvents(event);
            }
            navigate('/eventos');
        } catch (error) {
            console.error("Erro ao salvar evento", error);
        }
    };

    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-4 sm:p-6">
            <div className="w-full max-w-lg lg:max-w-4xl p-4 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <label className="block text-base lg:text-lg font-medium text-gray-700">Nome do Evento</label>
                        <input
                            type="text"
                            name="name"
                            value={event.name}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 lg:p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Digite o nome do evento"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base lg:text-lg font-medium text-gray-700">Descrição</label>
                        <input
                            type="text"
                            name="description"
                            value={event.description}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 lg:p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            placeholder="Digite a descrição do evento"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-base lg:text-lg font-medium text-gray-700">Data</label>
                        <input
                            type="date"
                            name="date"
                            value={event.date}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 lg:p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 lg:py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EventForm;
