type IntroCardProps = {
    title: String,
    description?: String,
}

export default function IntroCard(props: IntroCardProps) {
    const { title, description } = props;
    return (
        <div className="w-full p-4 shadow-md lg:max-w-lg">
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold">
                    {title}
                </h3>
                <p className="text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
}