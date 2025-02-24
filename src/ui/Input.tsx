export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props} // Passa todas as props recebidas para o input
      className="border border-gray-300 bg-gray-100 rounded-sm px-4 py-2 shadow-sm"
    />
  );
}
