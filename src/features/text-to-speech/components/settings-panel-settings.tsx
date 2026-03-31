"use client";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
import { useTypedAppFormContext } from "@/hooks/use-app-form";

import { sliders } from "@/features/text-to-speech/data/sliders";
import { ttsFormOptions } from "@/features/text-to-speech/components/text-to-speech-form";
import { useStore } from "@tanstack/react-form";

export function SettingsPanelSettings() {
  const form = useTypedAppFormContext(ttsFormOptions);
  const isSubmitting = useStore(form.store, (s) => s.isSubmitting);

  return (
    <>
      {/* voice Style Dropdown Section */}
      <div className="border-b border-dashed p-4">
        <p className="text-sm text-muted-foreground">
          Voice selector coming soon
        </p>
      </div>

      {/* Voice Adjustments Section */}
      <div className="p-4 flex-1">
        <FieldGroup className="gap-8">
          {sliders.map((sliders) => (
            <form.Field key={sliders.id} name={sliders.id}>
              {(field) => (
                <Field>
                  <FieldLabel>{sliders.label}</FieldLabel>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {sliders.leftLabel}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {sliders.rightLabel}
                    </span>
                  </div>
                  <Slider
                    value={[field.state.value]}
                    onValueChange={(value) => field.handleChange(value[0])}
                    min={sliders.min}
                    max={sliders.max}
                    step={sliders.step}
                    disabled={isSubmitting}
                    className="**:data-[slot=slider-thumb]:size-3 **:data-[slot=slider-thumb]:bg-foreground 
                    **:data-[slot=slider-track]:h-1"
                  />
                </Field>
              )}
            </form.Field>
          ))}
        </FieldGroup>
      </div>
    </>
  );
}
