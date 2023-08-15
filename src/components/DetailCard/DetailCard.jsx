import {Card, CardBody} from "@nextui-org/react";

// eslint-disable-next-line react/prop-types
export default function DetailCard({ title, data }) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    return (
        <Card className="w-full sm:max-w-[400px] bg-zinc-300">
            <CardBody>
                <h3 className="text-sm font-semibold mt-4 mb-2">{ title }</h3>
                <div className="flex gap-4">
                    <div>
                        {keys.map((key) => {return <p key={key} >{key}:</p>})}
                    </div>

                    <div>
                        {values.map((value) => {return <p key={value} >{value}</p>})}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
