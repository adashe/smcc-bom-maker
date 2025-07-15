export function OptionsForm({ options, handleChangeOptions }) {
    return (
        <div>
            <h2>OPTIONS</h2>
            <form className="options-form">
                <div>
                    <label>
                        Size:
                        <select
                            name="size"
                            value={options.size}
                            onChange={handleChangeOptions}
                        >
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xlarge">Extra Large</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        STC:
                        <select
                            name="stc"
                            value={options.stc}
                            onChange={handleChangeOptions}
                        >
                            <option value="32">32</option>
                            <option value="48">48</option>
                            <option value="64">64</option>
                            <option value="80">80</option>
                            <option value="96">96</option>
                            <option value="112">112</option>
                            <option value="128">128</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    );
}
