export default function App() {
    return (
        <div className="mx-auto flex w-screen max-w-3xl items-center justify-center p-4 md:p-8">
            <div className="flex w-full flex-col gap-4">
                <div className="whitespace-pre-wrap px-6 py-10">
                    &nbsp; &gt;&gt;&gt;&gt; We are a community of open-source
                    developers driven to make a difference.
                </div>

                <div className="mt-4">
                    <div>Discord ✨</div>
                    <div>
                        Join us on{' '}
                        <a href="https://discord.gg/v3x">
                            the official discord guild
                        </a>
                        .
                    </div>
                </div>

                <div className="mt-4">
                    <div>Twitter ✨</div>
                    <div>
                        Follow us on{' '}
                        <a href="https://twitter.com/v3xlabs">
                            the official twitter
                        </a>
                        .
                    </div>
                </div>
            </div>
        </div>
    );
}
