type Option = {
    value:string;
    label:string;
};

type Props = {
    value: string;
    options: Option[];
    onChange: (value: string) => void;
}

export const SelectTaskFilter = ({value,options,onChange}:Props) => {
    return(
        <select
            value={value}
            onChange={(e)=> onChange(e.target.value)}
            className="ml-3"
          >
            {options.map((opt)=>(
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
          </select>
    );
};