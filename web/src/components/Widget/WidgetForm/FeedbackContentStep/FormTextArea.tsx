interface FormTextAreaProps {
    setComment : (comment : string) => void
};

const FormTextArea = function FormTextAreaComponent(
    { setComment } : FormTextAreaProps
) {
    return (
        <textarea
            className="min-w-[304px] w-full min-h-[112px] text-sm rounded resize-none placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thin  scrollbar-thumb-zinc-700 scrollbar-track-transparent"
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={ event => setComment(event.target.value) }
        />
    );
};

export default FormTextArea;