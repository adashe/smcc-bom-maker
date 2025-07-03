export function CSVButton({ kitsData, partsData, assembly }) {
    const downloadCSV = () => {
        let csvString =
            "ID, Main ID, Item ID, Component ID, Qty Per Assembly, Save Changes";

        let partsBom = {};

        const quoteID = "7777777";

        for (const k in assembly) {
            if (assembly[k] > 0) {
                const arr = kitsData.filter((kit) => kit.id === k);
                const kit = arr[0];
                kit.components.forEach(
                    (component) =>
                        (partsBom[component] =
                            partsBom[component] + assembly[k] || assembly[k])
                );
            }
        }

        const selectedPartsArr = partsData.filter(
            (part) => partsBom[part.id] > 0
        );

        selectedPartsArr.map(
            (part, i) =>
                (csvString += `\n${i + 1},1,${quoteID},${part.id},${
                    partsBom[part.id]
                },Y`)
        );

        // Create a Blob from the CSV string
        const blob = new Blob([csvString], { type: "text/csv" });

        // Generate a download link and initiate the download
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "download.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <button className="active" onClick={downloadCSV}>
            EXPORT CSV
        </button>
    );
}
