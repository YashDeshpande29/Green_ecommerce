from codecarbon import EmissionsTracker

def track_emissions(task_name):
    tracker = EmissionsTracker(project_name=task_name)
    tracker.start()
    return tracker

def stop_tracking(tracker):
    emissions = tracker.stop()
    print(f"CO2 Emissions: {emissions} kg")
    return emissions
