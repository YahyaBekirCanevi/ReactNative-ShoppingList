import { StatusBar } from 'expo-status-bar';

function DebugMode({ enabled }) {
    if (!enabled) return <></>
    return <StatusBar style="auto" />
}

export default DebugMode;