import { useEffect, useState } from "react";

export function useDebounce(value: string, delay = 300) {
	const [debouncedValue, setDebouncedValue] = useState<string>("");

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearInterval(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}
