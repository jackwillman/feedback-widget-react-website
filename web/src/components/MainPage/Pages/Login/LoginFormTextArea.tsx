interface FormTextAreaProps {
    setInput : (input : string) => void
};

const LoginFormTextArea = function LoginFormTextAreaComponent(
    { setInput } : FormTextAreaProps
) {
    return (
        <textarea
            className="min-w-[170px] w-full h-10 text-sm rounded resize-none placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none scrollbar-thin  scrollbar-thumb-zinc-700 scrollbar-track-transparent"
            onChange={ event => setInput(event.target.value) }
        />
    );
};

export default LoginFormTextArea;